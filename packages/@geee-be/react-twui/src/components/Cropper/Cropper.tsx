'use client';

import { forwardRef, useState } from 'react';
import {
  Cropper as BaseCropper,
  type CoreSettings,
  type CropperBackgroundWrapperProps,
  type CropperRef,
  type CropperState,
  ImageRestriction,
  isTouchEvent,
  isWheelEvent,
  TransformableImage,
  type TransformableImageEvent,
  useMoveImageOptions,
  useScaleImageOptions,
} from 'react-advanced-cropper';
import { useDebouncedCallback } from 'use-debounce';
import { cn } from '../../helpers/utils';
import './compact.css';
import './custom.css';
import './style.css';

const getAspectRatio = (state: CropperState, settings: CoreSettings) => {
  const aspectRatio =
    typeof settings.aspectRatio === 'function'
      ? settings.aspectRatio(state, settings)
      : settings.aspectRatio;
  return typeof aspectRatio === 'number'
    ? { minimum: aspectRatio ?? 1, maximum: aspectRatio ?? 1 }
    : {
        minimum: aspectRatio.minimum ?? aspectRatio.maximum ?? 1,
        maximum: aspectRatio.maximum ?? aspectRatio.minimum ?? 1,
      };
};

export const Cropper = forwardRef<
  React.ComponentRef<typeof BaseCropper>,
  React.ComponentPropsWithoutRef<typeof BaseCropper> & {
    onChange?: (cropper: CropperRef) => void;
  }
>(({ className, onChange, ...props }, ref) => (
  <BaseCropper
    {...props}
    ref={ref}
    className={cn('Cropper', className)}
    onChange={onChange}
    imageRestriction={ImageRestriction.stencil}
    defaultCoordinates={(state: CropperState, settings: CoreSettings) => {
      const aspectRatio = getAspectRatio(state, settings);
      return {
        top:
          state.imageSize.height / 2 -
          state.imageSize.width / aspectRatio.minimum / 2,
        left:
          state.imageSize.width / 2 -
          (state.imageSize.height * aspectRatio.maximum) / 2,
        width: state.imageSize.width,
        height: state.imageSize.height,
      };
    }}
    transformImage={{
      adjustStencil: false,
    }}
    backgroundWrapperComponent={BackgroundWrapperWithNotifications}
  />
));

const BackgroundWrapperWithNotifications = ({
  cropper,
  scaleImage = true,
  moveImage = true,
  children,
  className,
  style,
}: CropperBackgroundWrapperProps) => {
  const moveImageOptions = useMoveImageOptions(moveImage);

  const scaleImageOptions = useScaleImageOptions(scaleImage);

  const transitions = cropper.getTransitions();

  const [notificationType, setNotificationType] = useState<'touch' | 'wheel'>(
    'wheel',
  );

  const [notificationVisible, setNotificationVisible] = useState(false);

  const debouncedHideNotification = useDebouncedCallback(() => {
    setNotificationVisible(false);
  }, 500);

  const eventsHandler = (
    event: TransformableImageEvent,
    nativeEvent: Event,
  ) => {
    if (isTouchEvent(nativeEvent)) {
      if (nativeEvent.touches.length === 1 && !event.active) {
        setNotificationVisible(true);
        setNotificationType('touch');
        debouncedHideNotification();
        event.preventDefault();
      } else {
        setNotificationVisible(false);
      }
    } else if (isWheelEvent(nativeEvent)) {
      if (!event.active && !nativeEvent.ctrlKey) {
        setNotificationVisible(true);
        setNotificationType('wheel');
        debouncedHideNotification();
        event.preventDefault();
      } else {
        setNotificationVisible(false);
      }
    }
    if (!event.defaultPrevented) {
      nativeEvent.preventDefault();
      nativeEvent.stopPropagation();
    }
  };

  return (
    <TransformableImage
      className={className}
      style={style}
      onTransform={cropper.transformImage}
      onTransformEnd={cropper.transformImageEnd}
      onEvent={eventsHandler}
      touchMove={moveImageOptions.touch}
      mouseMove={moveImageOptions.mouse}
      touchScale={scaleImageOptions.touch}
      wheelScale={scaleImageOptions.wheel}
      disabled={transitions.active}
    >
      {children}
      <div
        className={cn(
          'cropper-event-notification',
          notificationVisible && 'cropper-event-notification--visible',
        )}
      >
        {notificationType === 'wheel'
          ? 'Use ctrl + scroll to zoom the cropper'
          : 'Use two fingers to move the cropper'}
      </div>
    </TransformableImage>
  );
};
