import resetStyles from "../styles/reset.css";
import timelineStyles from "../styles/timeline.css";
import styles from "../styles/styles.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
