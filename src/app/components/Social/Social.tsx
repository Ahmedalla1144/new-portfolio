import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { styles } from "../Header/styles";

export default function Social() {
  return (
    <>
      <Link className={styles?.socialIcons} href="https://github.com/Ahmedalla1144">
        <AiFillGithub />
      </Link>

      <Link className={styles.socialIcons} href="https://linkedin.com/in/ahmed-alaa1144">
        <AiFillLinkedin />
      </Link>

      <Link className={styles.socialIcons} href="https://www.instagram.com/ahmed_alla3/">
        <AiFillInstagram />
      </Link>

      <Link className={styles.socialIcons} href="https://www.facebook.com/ahmed.alla.313">
        <AiFillFacebook />
      </Link>
    </>
  );
}
