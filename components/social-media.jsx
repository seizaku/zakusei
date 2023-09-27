import Link from "next/link";
import { 
    GitHubLogoIcon,
    LinkedInLogoIcon,
    InstagramLogoIcon,
    TwitterLogoIcon
} from "@radix-ui/react-icons";

const SocialMedia = () => {
  return (
    <div className="flex space-x-4">
        <Link href=''>
            <GitHubLogoIcon />
        </Link>
        <Link href=''>
            <LinkedInLogoIcon />
        </Link>
        <Link href=''>
            <InstagramLogoIcon />
        </Link>
        <Link href=''>
            <TwitterLogoIcon />
        </Link>
    </div>
  )
}

export default SocialMedia;
