"use client";
import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

import { SiMinutemailer } from "react-icons/si";
import { BsKeyFill } from "react-icons/bs";
import Link from "next/link";

import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import TextField from "./TextField";
import useLoaderStore from "@/stores/loaderStore";
import NavBar from "@/app/dmComponents/Navbar";
import MainFooter from "@/app/dmComponents/footer/MainFooter";

const LoginPage = ({ authProviders }) => {
  const setLoading = useLoaderStore((state) => state.setLoading);
  const router = useRouter();

  const { register, control, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const loginHandler = async (data, e) => {
    e.preventDefault();
    console.log(data);
    return;
    try {
      setLoading(true);

      let res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/login`,
        {
          headers: {
            "Content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ email: data.email, password: data.password }),
        }
      );
      res = await res.json();
      console.log(res);
      if (res.success === false) {
        toast.error(res.error);
      } else {
        router.push("/admin");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
      // reset();
    }
  };

  return (
    <div className="min-h-screen w-full ">
      <NavBar videoBg={false} />

      <div className="flex items-center justify-center min-h-[700px] ">
        <div className="space-y-3 border border-second rounded-sm shadow-md w-[500px] flex flex-col items-center justify-center p-10">
          <h2 className="text-4xl font-bold text-second">Sign in</h2>
        <form
            onSubmit={handleSubmit(loginHandler)}
            noValidate
            className="space-y-5"
          >
            <TextField 
              Icon={SiMinutemailer} 
              type={"email"} 
              placeholder={"Enter Email"} 
              register= {register("email", {
                required: 'Email is required',
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email is not in proper format"
                }
              })}
              errorMessage={errors?.email?.message} 
            />

            <TextField 
              Icon={BsKeyFill} 
              type={"password"} 
              placeholder={"Enter Password"} 
              register= {register("password", {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: "Password should contain atleast 6 characters"
                }
              })}
              errorMessage={errors?.password?.message} 
            />

            <button className="bg-second text-white py-3 px-5 w-full rounded-full">
              Signin
            </button>
          </form>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-second hover:underline">
              Register
            </Link>{" "}
          </p>
          {/* <DevTool control={control} /> */}
        </div>
      </div>

      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
};

export default LoginPage;
