import { FC } from 'react'
import style from './style.module.css'
import BannerImange from '../../assets/banner.jpg'
const FirstSection: FC = () => {
  return (
    <div className={style.firstSection}>
      <img src={BannerImange} alt="Banner" />
    </div>
  )
}
export default FirstSection
