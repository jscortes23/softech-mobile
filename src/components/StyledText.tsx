import { Text } from 'react-native'

import { alignText, styleColors, styleFontSize, styleFontWeight } from '../config/themes/appThemes'
import { StyledTextProps } from '../interfaces/IStyledText'

export const StyledText: React.FC<StyledTextProps> = (props) => {
  const textStyles: object = [
    { ...props.style },
    props.largeTitle && styleFontSize.largeTitle,
    props.title1 && styleFontSize.title1,
    props.title2 && styleFontSize.title2,
    props.subtitle1 && styleFontSize.subtitle1,
    props.subtitle2 && styleFontSize.subtitle2,
    props.body1 && styleFontSize.body1,
    props.body2 && styleFontSize.body2,
    props.caption1 && styleFontSize.caption1,
    props.blue10 && styleColors.blue10,
    props.blue40 && styleColors.blue40,
    props.blue80 && styleColors.blue80,
    props.blue100 && styleColors.blue100,
    props.blueBase && styleColors.blueBase,
    props.red10 && styleColors.red10,
    props.red40 && styleColors.red40,
    props.red80 && styleColors.red80,
    props.red100 && styleColors.red100,
    props.redBase && styleColors.redBase,
    props.pink10 && styleColors.pink10,
    props.pink40 && styleColors.pink40,
    props.pink80 && styleColors.pink80,
    props.pink100 && styleColors.pink100,
    props.pinkBase && styleColors.pinkBase,
    props.neutral40 && styleColors.neutral40,
    props.neutral80 && styleColors.neutral80,
    props.neutral100 && styleColors.neutral100,
    props.neutralBase && styleColors.neutralBase,
    props.green10 && styleColors.green10,
    props.green40 && styleColors.green40,
    props.green80 && styleColors.green80,
    props.green100 && styleColors.green100,
    props.greenBase && styleColors.greenBase,
    props.brand10 && styleColors.brand10,
    props.brand40 && styleColors.brand40,
    props.brand80 && styleColors.brand80,
    props.brand100 && styleColors.brand100,
    props.brandBase && styleColors.brandBase,
    props.black && styleColors.black,
    props.white && styleColors.white,
    props.center && alignText.center,
    props.justify && alignText.justify,
    props.right && alignText.right,
    props.left && alignText.left,
    props.bold && styleFontWeight.bold,
    props.regular && styleFontWeight.regular,
  ]
  return <Text style={textStyles}>{props.children}</Text>
}
