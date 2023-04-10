import styled, { css } from 'styled-components'
import { Button } from 'antd'
import { Fragment, useState } from 'react'

export interface OrderButtonContent {
	key: number
	name: string
}

const WrappperDiv = styled.div`
	width: 140px;
	display: inline-block;
`

const SelectedButton = styled(Button)<{ selected: boolean }>`
	width: 40px;
	height: 38px;
	border-radius: 50%;
	${props =>
		props.selected &&
		css`
			background-color: #5687b3;
			color: #ffffff;
			&:hover {
				color: #ffffff !important;
				border-color: #2f6fa7 !important;
			}
		`}
	margin-top: 10px;
	margin-right: 5px;
	margin-left: 10px;
	padding: 0px;
`

const StyledSpan = styled.span<{ selected: boolean }>`
	${props =>
		props.selected &&
		css`
			font-weight: 700;
		`}
`

export const OrderButton = (params: {
	orderButtonList: OrderButtonContent[]
}) => {
	const [countList, setCountList] = useState<number[]>(
		new Array(params.orderButtonList.length).fill(0),
	)
	const [count, setCount] = useState<number>(0)
	const handleCountChange = (index: number) => {
		if (countList[index] === 0) {
			setCount(count + 1)
			const copyArray = [...countList]
			copyArray[index] = count + 1
			setCountList(copyArray)
		} else {
			setCount(count - 1)
			const copyArray = [...countList]
			for (let i = 0; i < copyArray.length; i++) {
				if (copyArray[i] > copyArray[index]) {
					copyArray[i] = copyArray[i] - 1
				}
			}
			copyArray[index] = 0
			setCountList(copyArray)
		}
	}

	return (
		<>
			{params.orderButtonList.map((item, _) => (
				<Fragment key={item.key}>
					<WrappperDiv>
						<SelectedButton
							selected={countList[item.key] > 0}
							onClick={() => handleCountChange(item.key)}
						>
							{countList[item.key] == 0 ? <></> : countList[item.key]}
						</SelectedButton>
						<StyledSpan selected={countList[item.key] > 0}>
							{item.name}
						</StyledSpan>
					</WrappperDiv>
					{item.key != 0 && item.key % 7 == 0 ? <div /> : <></>}
				</Fragment>
			))}
		</>
	)
}
