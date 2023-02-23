import { FC, useState } from 'react'
import CartoonImage from '../../assets/cartoon.jpg'
import FoodImage from '../../assets/food.jpg'
import MovieImage from '../../assets/movie.png'
import LifeImage from '../../assets/life.jpg'
import style from './style.module.css'

const SecondSection: FC = () => {
  const [activeTap, setActiveTap] = useState<string>('cartoon')
  return (
    <div className={style.secondSection}>
      <ul>
        <li>
          <span>Cartoon</span>
          {activeTap === 'cartoon' && <span className={style.line}> </span>}
        </li>
        <li>Food</li>
        <li>Movies</li>
        <li>Life</li>
      </ul>
      <div>
        <section>
          <h2>Cartoon</h2>
          <img src={CartoonImage} alt="Cartoon" />
        </section>
        <section>
          <h2>Food</h2>
          <img src={FoodImage} alt="Food" />
        </section>
        <section>
          <h2>Movies</h2>
          <img src={MovieImage} alt="Movies" />
        </section>
        <section>
          <h2>Life</h2>
          <img src={LifeImage} alt="Life" />
        </section>
      </div>
    </div>
  )
}
export default SecondSection
