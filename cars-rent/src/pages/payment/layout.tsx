import React from 'react'
import { useRouter } from 'next/router';

const PaymentLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Payment Page for {slug}</h1>
      {children}
    </div>
  )
}

export default PaymentLayout