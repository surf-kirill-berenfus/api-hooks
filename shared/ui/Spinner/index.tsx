import Image from 'next/image';

interface IProps {
    height?: number;
    width?: number;
}

export const Spinner = ({ height = 40, width = 40 }: IProps) => {
    return (
        <Image
            height={height}
            width={width}
            src="/icons/spin.animated.svg"
            alt="spinner"
            quality={100}
        />
    );
};
