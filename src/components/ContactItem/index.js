import './index.css'

const ContactItem = props => {
  const {contactDetails, togooleIsFavorite} = props
  const {id, name, mobileNo, isFavorite} = contactDetails
  const onClickIsFaveret = () => {
    togooleIsFavorite(id)
  }

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onClickIsFaveret}
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
    </li>
  )
}

export default ContactItem
