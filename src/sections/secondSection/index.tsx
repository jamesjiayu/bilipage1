import { FC, useState } from 'react'
import CartoonImage from '../../assets/cartoon.jpg'
import FoodImage from '../../assets/food.jpg'
import MovieImage from '../../assets/movie.png'
import LifeImage from '../../assets/life.jpg'
import style from './style.module.css'
import classNames from 'classnames'
const tabs = [
  {
    key: 'cartoon',
    title: 'Cartoon',
  },
  {
    key: 'food',
    title: 'Food',
  },
  {
    key: 'movie',
    title: 'Movie',
  },
  {
    key: 'life',
    title: 'Life',
  },
]
const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cartoon')
  return (
    <div className={style.secondSection}>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
            <span>{tab.title}</span>
            <span
              className={classNames(style.line, {
                [style.visible]: activeTab === tab.key,
              })}></span>
          </li>
        ))}
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
