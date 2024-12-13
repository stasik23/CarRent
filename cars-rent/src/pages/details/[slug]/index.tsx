import React from 'react';
import { useRouter } from 'next/router';

const Details = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <h1>Details for {slug}</h1>
  );
}
export default Details;