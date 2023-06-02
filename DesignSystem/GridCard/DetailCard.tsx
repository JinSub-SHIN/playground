import styled from 'styled-components'
import { ReactNode } from 'react'
import { Card } from 'antd'
import { CardDescription } from './CardDescription'
import { CardTitle } from './CardTitle'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducer/rootReducer'

const { Meta } = Card

const StyledCard = styled(Card)`
	border-radius: 0px;
	height: 100%;
`

const Video = styled.video`
	height: 550px;
	object-fit: initial;
`

export interface DetailProps {
	children: ReactNode
}

export const DetailCard = (props: DetailProps) => {
	const cardItem = useSelector((state: RootState) => state.cardList.details)

	if (cardItem?.type == 'video') {
		return (
			<StyledCard cover={props.children}>
				<Meta
					title={<CardTitle title={cardItem.title} buttonType="video" />}
					description={<CardDescription detail={cardItem} />}
				/>
			</StyledCard>
		)
	} else if (cardItem?.type == 'photo') {
		return (
			<StyledCard cover={props.children}>
				<Meta
					title={<CardTitle title={cardItem.title} buttonType="video" />}
					description={<CardDescription detail={cardItem} />}
				/>
			</StyledCard>
		)
	} else {
		return <></>
	}
}
