type HeadProps = {
    children: React.ReactNode;
};

export default function Head({
    children,
}: HeadProps) {
    return (
        <h2 className="text-4xl font-bold text-white">
            {children}
        </h2>
    );
}