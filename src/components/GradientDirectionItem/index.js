// Write your code here
import {DirectionListItem, DirectionButtonItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, isActive, clickGradientDirection} = props
  const {value, displayText, directionId} = details

  const onClickGradientDirectionItem = () => {
    clickGradientDirection(value)
  }

  return (
    <DirectionListItem>
      <DirectionButtonItem
        type="button"
        isActive={isActive}
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </DirectionButtonItem>
    </DirectionListItem>
  )
}

export default GradientDirectionItem
