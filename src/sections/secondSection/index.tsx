import { FC, useRef, useState, useEffect } from 'react'
import CartoonImage from '../../assets/cartoon.jpg'
import FoodImage from '../../assets/food.jpg'
import MovieImage from '../../assets/movie.png'
import LifeImage from '../../assets/life.jpg'
import ImageLogo from '../../assets/logo.png'
import style from './style.module.css'
import classNames from 'classnames'
const TAB_HEIGHT = 56
const tabs = [
  {
    key: 'cartoon',
    title: 'Cartoon',
    image: CartoonImage,
  },
  {
    key: 'food',
    title: 'Food',
    image: FoodImage,
  },
  {
    key: 'movie',
    title: 'Movie',
    image: MovieImage,
  },
  {
    key: 'life',
    title: 'Life',
    image: LifeImage,
  },
]
const SecondSection: FC = () => {
  const secondSectionRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<string>('cartoon')
  const [isFixed, setIsFixed] = useState<boolean>(false)
  const activate = (key: string) => {
    setActiveTab(key)
    const tabContentEl = document.querySelector(`[data-id=${key}]`)
    if (tabContentEl) {
      tabContentEl.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const onScroll = () => {
    if (secondSectionRef.current) {
      const { top } = secondSectionRef.current.getBoundingClientRect()
      if (top <= 0) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
      //setIsFixed(top<=0)
      const sectionNodes = secondSectionRef.current.querySelectorAll('section')
      Array.from(sectionNodes).forEach((sectionEl) => {
        const { top } = sectionEl.getBoundingClientRect()
        const key = sectionEl.getAttribute('data-id') || ''
        if (top <= TAB_HEIGHT) {
          setActiveTab(key)
        }
      })
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className={style.secondSection} ref={secondSectionRef}>
      <ul className={classNames({ [style.isFixed]: isFixed })}>
        {tabs.map((tab) => (
          <li key={tab.key} onClick={() => activate(tab.key)}>
            <span>{tab.title}</span>
            <span
              className={classNames(style.line, {
                [style.visible]: activeTab === tab.key,
              })}></span>
          </li>
        ))}
      </ul>
      <div>
        {tabs.map((tab) => (
          <section data-id={tab.key}>
            <h2>{tab.title}</h2>
            <img src={tab.image} alt={tab.key} />
          </section>
        ))}
      </div>

      {/* 吸底按钮 */}
      {/* <div 
        className={classNames(style.btnWrapper, { [style.visible]: isFixed })}> */}
      <div className={style.btnWrapper}>
        <img src={ImageLogo} alt="Logo" />
        <button>Open in APP</button>
      </div>
    </div>
  )
}
export default SecondSection
