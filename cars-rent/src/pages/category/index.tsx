import { CarModel } from '@/commons/interface';
import { Grid } from '@/components/Grid'
// import { cars } from '@/data'
import React from 'react'

interface CategoryProp{
  cars: CarModel[];
}

const Category: React.FC<CategoryProp> = ({cars}) => {
  return (
    <div>
      <Grid/>
      <Category cars={cars}/>
    </div>
  )
}

export default Category