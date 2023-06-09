import Head from 'next/head'
import Link from 'next/link'
import { InlineWidget } from "react-calendly";


import { AuthLayout } from '@/components/AuthLayout'
import { Logo } from '@/components/Logo'

export default function Register() {
  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col pt-5">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className='py-3 mb-3'>
            <h3
              className="mt-6 text-sm font-medium text-slate-600"
            >
              Voyons-nous ! 
            </h3>
            <p className="mt-2 font-display text-xl text-slate-900">
              30 minutes pour vous convaincre
            </p>
          </div>
          <InlineWidget 
            url="https://calendly.com/display-app/demo-30min"
            pageSettings={{
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
            }}

          />
        </div>
      </AuthLayout>
    </>
  )
}
