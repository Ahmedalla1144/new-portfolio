import Charset from "./Charset";

export default function Section({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title?: string;
}>) {
  return (
    <section className="m-auto w-[85%] lg:pl-10 lg:my-20 mt-0">
      {title && (
        <>
          <Charset />
          <h2 className="text-4xl lg:text-6xl bg-gradient-title bg-clip-text text-transparent font-semibold max-w-max">
            {title}
          </h2>
        </>
      )}
      {children}
    </section>
  );
}
