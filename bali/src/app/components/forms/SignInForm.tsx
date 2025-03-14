'use client';

import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import GoogleSignInButton from "../GoogleSignInButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const FormSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z.string().min(1, 'Password is required').min(8,'Password must have 8 characters'),
  })

const SignInForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          email: "",
          password:"",
        },
      })

    const onSubmit = async (values:z.infer<typeof FormSchema> )=> {
        const signInData = await signIn('credentials',{
          redirect: false,
          email: values.email,
          password: values.password,
        });
        if (signInData?.error) {
          console.log("Error:", signInData.error);
      } else {
          console.log("Sign-in successful:", signInData);
          router.refresh();
          router.push('/admin'); // Redirect manually
      }
        
    }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-2">
        <div><FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="mail@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button className="w-full mt-6" type="submit">Sign in</Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
        </div>
        <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
        <p className="text-center text-sm text-gray-600 mt-2">
             If you don&apos;t have an account, please&nbsp;
             <Link className="text-blue-500 hover:underline" href='/sign-up'>Sign up</Link>
        </p>
      
    </Form>
  )
}

export default SignInForm