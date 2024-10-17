import { COURSE_CREDITS } from "@/lib/config";
import { AuthAction } from "./auth";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>This is some example footer content.</div>
        <div>
          <AuthAction />
        </div>
        <div>{COURSE_CREDITS}</div>
      </div>
    </footer>
  );
}
