import * as React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { GlowingEffect } from "@/components/ui/glowing-effect";

/**
 * The root container for a testimonial card. Establishes a relative
 * positioning context for its children, like the accent and avatar.
 */
const TestimonialCard = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        // WHY: `relative` is crucial for positioning the Accent and Avatar layers absolutely.
        className={cn('relative w-full max-w-md', className)}
        {...props}
    />
));
TestimonialCard.displayName = 'TestimonialCard';

/**
 * A decorative background layer, positioned absolutely behind the main content.
 * Its visual style (color, offset, rotation) is controlled via className.
 */
const TestimonialCardAccent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        // WHY: `inset-0` makes it match the parent's size, and `-z-10` ensures it stays behind the content card.
        className={cn(
            'absolute inset-0 -z-10 rounded-xl transition-transform translate-x-2 translate-y-2',
            className
        )}
        {...props}
    />
));
TestimonialCardAccent.displayName = 'TestimonialCardAccent';

/**
 * The main content container for the testimonial, using a `figure` element
 * for semantic correctness with `blockquote` and `figcaption`.
 */
const TestimonialCardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <figure
        ref={ref}
        className={cn(
            'relative flex w-full flex-col gap-6 rounded-xl border bg-card p-6 text-card-foreground shadow-sm ring-2',
            className
        )}
        {...props}
    >
        <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
        />
        {props.children}
    </figure>
));
TestimonialCardContent.displayName = 'TestimonialCardContent';

interface TestimonialCardAvatarProps
    extends React.ComponentPropsWithoutRef<typeof Avatar> {
    /** The source URL for the avatar image. */
    src?: string;
    /** The alternative text for the avatar image. */
    alt?: string;
    /** The content to display as a fallback if the image fails to load. */
    fallback?: React.ReactNode;
    className?: string;
}

/**
 * The floating avatar element, positioned absolutely relative to the root `TestimonialCard`.
 * Extends the `Avatar` component from shadcn/ui.
 */
const TestimonialCardAvatar = React.forwardRef<
    React.ElementRef<typeof Avatar>,
    TestimonialCardAvatarProps
>(({ className, src, alt, fallback, ...props }, ref) => (
    <Avatar
        ref={ref}
        className={cn(
            'absolute h-16 w-16 border-4 border-background z-10 ring-2',
            className
        )}
        {...props}
    >
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
));
TestimonialCardAvatar.displayName = 'TestimonialCardAvatar';

/**
 * The main quote or testimonial text, using a `blockquote` for semantic meaning.
 */
const TestimonialCardQuote = React.forwardRef<
    HTMLQuoteElement,
    React.HTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
    <blockquote
        ref={ref}
        className={cn('text-base leading-relaxed', className)}
        {...props}
    />
));
TestimonialCardQuote.displayName = 'TestimonialCardQuote';

/**
 * A container for rating elements, such as star icons.
 */
const TestimonialCardRating = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex items-center gap-1', className)}
        {...props}
    />
));
TestimonialCardRating.displayName = 'TestimonialCardRating';

/**
 * The author attribution section, using a `figcaption` to semantically
 * link it to the `figure` in `TestimonialCardContent`.
 */
const TestimonialCardAuthor = React.forwardRef<
    HTMLElement,
    React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
    <figcaption
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
));
TestimonialCardAuthor.displayName = 'TestimonialCardAuthor';

export {
    TestimonialCard,
    TestimonialCardAccent,
    TestimonialCardContent,
    TestimonialCardAvatar,
    TestimonialCardQuote,
    TestimonialCardRating,
    TestimonialCardAuthor,
};
