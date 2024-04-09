import "@/styles/globals.css";
import { QuizProvider } from "@/store";

export default function App({ Component, pageProps }) {
  return (
    <QuizProvider>
      <Component {...pageProps} />
    </QuizProvider>
  );
}
