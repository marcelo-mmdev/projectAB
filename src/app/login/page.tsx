'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SyntheticEvent, useState } from 'react';
import Link from "next/link";
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


export default function LoginPage() {

  // const login = useContext(AuthProvider);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   login(username, password);
  // };


  // const [username, setUsername] = useState<string>('')
  // const [password, setPassword] = useState<string>('')

  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false
    })

    if (result?.error) {
      console.log(result)
      return
    }

    router.replace('/dashboard')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card className="w-[350px] h-[350px] items-center justify-center">
          <CardHeader>
            <CardTitle>Telemetria</CardTitle>
            <CardDescription>Tv Asa Branca</CardDescription>
          </CardHeader>
          <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">User</Label>
                  <Input 
                    id="username" 
                    type='text' 
                    placeholder="Usuário" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type='password' 
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </div>
              </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {/* <Link href={"/dashboard"}> */}
                  <Button
                  type='submit'
                  // onClick={handleLogin}
                  >
                    Sign in
                  </Button>
                {/* </Link> */}
          </CardFooter>
        </Card>
      </form>
    </>
  )
}
