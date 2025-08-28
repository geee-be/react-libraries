'use client';

import * as locales from 'date-fns/locale';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { buttonVariants } from '../../components/Button/variants';
import { cn } from '../../helpers/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={
        locales[
          (navigator.language?.replace('-', '') as keyof typeof locales) ||
            'enUS'
        ] || locales.enUS
      }
      className={cn('p-3 relative w-fit', className)}
      classNames={{
        month_caption:
          'rdp-month_caption flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        day: 'h-9 w-9 text-center content-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-secondary/50 [&:has([aria-selected])]:bg-secondary first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day_button: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
        ),
        disabled: 'text-muted-fg opacity-50',
        hidden: 'invisible',
        outside:
          'text-paper-fg/70 aria-selected:bg-secondary/50 aria-selected:text-secondary-fg',
        range_end:
          'aria-selected:rounded-r-full aria-selected:rounded-l-none1 text-primary-fg',
        range_start:
          'aria-selected:rounded-l-full aria-selected:rounded-r-none1 text-primary-fg',
        range_middle:
          'aria-selected:rounded-none aria-selected:bg-secondary aria-selected:text-secondary-fg',
        selected:
          'bg-primary rounded-lg text-primary-fg hover:bg-primary hover:text-primary-fg focus:bg-primary focus:text-primary-fg',
        today: 'text-primary',
        weekday:
          'rdp-weekday text-muted-fg rounded-md w-9 font-normal text-paper-fg/70 text-[0.8rem]',
        weekdays: 'rdp-weekdays flex',
        month: 'rdp-month space-y-4',
        months: 'rdp-months relative flex flex-col space-y-4 sm:space-y-0',
        nav: 'rdp-nav absolute z-3 px-2 w-full flex justify-between',
        button_previous: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 rounded-full',
        ),
        button_next: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 rounded-full',
        ),
        week: 'flex w-full mt-1',
        month_grid: 'w-full border-collapse space-y-1',
        ...classNames,
      }}
      components={{
        Chevron: ({ className, ...props }) => {
          if (props.orientation === 'left') {
            return (
              <ChevronLeftIcon
                className={cn('h-4 w-4', className)}
                {...props}
              />
            );
          }
          return (
            <ChevronRightIcon className={cn('h-4 w-4', className)} {...props} />
          );
        },
        // IconLeft: ({ className, ...props }) => (
        //   <ChevronLeft className={cn('h-4 w-4', className)} {...props} />
        // ),
        // IconRight: ({ className, ...props }) => (
        //   <ChevronRight className={cn('h-4 w-4', className)} {...props} />
        // ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
