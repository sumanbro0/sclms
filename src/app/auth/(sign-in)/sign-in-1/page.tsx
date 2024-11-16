import Image from "next/image";
import SignInForm from "./sign-in-form";
import { metaObject } from "@/config/site.config";
import UnderlineShape from "packages/isomorphic-core/src/components/shape/underline";
import AuthWrapperOne from "@/shared/auth-layout/auth-wrapper-one";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";

export const metadata = {
  ...metaObject("Sign In"),
};

export default async function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
          Welcome back! Please{" "}
          <span className="relative inline-block">
            Sign in to
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36" />
          </span>{" "}
          continue.
        </>
      }
      description="By signing up, you will gain access to exclusive content, special
      offers, and be the first to hear about exciting news and updates."
      bannerTitle="The simplest way to manage your workspace."
      bannerDescription="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint velit officia consequat duis."
      isSocialLoginActive={false}
      pageImage={
        <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
          <Image
            src={
              "https://isomorphic-furyroad.s3.amazonaws.com/public/auth/sign-up.webp"
            }
            alt="Sign Up Thumbnail"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      }
    >
      <SignInForm />
    </AuthWrapperOne>
  );
}
