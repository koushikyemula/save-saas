import NextTopLoader from "nextjs-toploader";

const TopLoader = () => (
  <NextTopLoader
    color="#F6F6F3"
    easing="ease"
    speed={200}
    crawlSpeed={200}
    showSpinner={false}
    height={3}
    crawl={true}
    initialPosition={0.08}
  />
);

export default TopLoader;
