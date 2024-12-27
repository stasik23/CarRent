import { CarModel } from '@/commons/interface';
import Category from '@/components/Category';
import { Footer } from '@/components/Footer';
import { Grid } from '@/components/Grid'
import { Navbar } from '@/components/Navbar';
// import { cars } from '@/data'
import React from 'react'

interface CategoryProp{
  cars: CarModel[];
}

const CategoryPage: React.FC<CategoryProp> = ({cars}) => {
  return (
    <div>
      <Navbar/>
      <Grid/>
      <Category cars={cars}/>
      <Footer/>
    </div>
  )
}

export default CategoryPage