import { FC } from 'react'
import title1Image from '../../assets/title1.jpg'
import title2Image from '../../assets/title2.jpg'
import CommentImage from '../../assets/comment.jpg'
import style from './style.module.css'

const ThirdSection: FC = () => {
  return (
    <div className={style.thirdSection}>
      <img src={title1Image} alt="title1" />
      <img className={style.comment} src={CommentImage} alt="comment" />

      <img src={title2Image} alt="title2" />
      <img className={style.comment} src={CommentImage} alt="comment" />
    </div>
  )
}
export default ThirdSection
