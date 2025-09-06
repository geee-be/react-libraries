import {
  Avatar as AvatarComponent,
  AvatarFallback as AvatarFallbackComponent,
  AvatarImage as AvatarImageComponent,
} from './Avatar.js';

// Define the compound type
type AvatarCompound = typeof AvatarComponent & {
  Fallback: typeof AvatarFallbackComponent;
  Image: typeof AvatarImageComponent;
};

// Create compound component with sub-components attached
const Avatar: AvatarCompound = Object.assign(AvatarComponent, {
  Fallback: AvatarFallbackComponent,
  Image: AvatarImageComponent,
});

// Export individual components for backward compatibility
export {
  Avatar,
  AvatarFallbackComponent as AvatarFallback,
  AvatarImageComponent as AvatarImage,
};
