import Image from 'next/image';

export const Spinner = () => {
    return (
        <Image height={40} width={40} src="/icons/spin.animated.svg" alt="spinner" quality={100} />
    );
};
