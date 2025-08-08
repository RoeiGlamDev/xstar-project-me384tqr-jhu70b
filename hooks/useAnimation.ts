import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations in the luxury LRP cosmetics website.
 * This hook provides elegant and high-end animations to enhance the user experience.
 * 
 * @returns {Object} - An object containing the animation state and a function to trigger the animation.
 */
export const useAnimation = () => {
    const animationRef = useRef<HTMLDivElement | null>(null);
    const [isAnimated, setIsAnimated] = useState<boolean>(false);

    /
     * Triggers the animation effect for luxury LRP cosmetics elements.
     * This function can be called to initiate the animation when the component mounts or on user interaction.
     */
    const triggerAnimation = () => {
        if (animationRef.current) {
            animationRef.current.classList.add('animate');
            setIsAnimated(true);
        }
    };

    useEffect(() => {
        // Add event listener for scroll or other interactions to trigger animations
        const handleScroll = () => {
            if (window.scrollY > 100) {
                triggerAnimation();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {
        animationRef,
        isAnimated,
        triggerAnimation,
    };
};

/
 * CSS styles for the luxury LRP cosmetics animations.
 * These styles should be defined in a separate CSS file and imported into the component.
 */
const styles = 
    .animate {
        transition: transform 0.5s ease, opacity 0.5s ease;
        transform: translateY(0);
        opacity: 1;
    }

    .animate-initial {
        transform: translateY(50px);
        opacity: 0;
    }
;

// Exporting the hook for use in other components
export default useAnimation;