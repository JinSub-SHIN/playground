import { useState } from 'react'
import styled, { css } from 'styled-components'
import { Col, Row, Button, Divider, Card } from 'antd'

interface FilterCondition {
	key: number
	value: string
	selected: boolean
}

const ParentDiv = styled.div`
	width: 100%;
	height: 750px;
	border: 1px solid #f1f1f1;
	padding: 0px 10px 0px 10px;
	user-select: none;
`

const HeaderRow = styled(Row)`
	height: auto;
`

const HeaderCol = styled(Col)`
	text-align: center;
`

const ContentCol = styled(Col)``

const FlexBox = styled.div`
	width: 100%;
	display: flex;
	padding: 0px 5px 0px 5px;
`
const FlexContent = styled.div`
	flex: 1;
`

const FilterButton = styled(Button)<{ selected?: boolean }>`
	width: 80%;
	padding: 0px;
	${props =>
		props.selected &&
		css`
			background-color: #004d91;
			color: #ffffff;
		`}
	border-color: #004d91;
	border-radius: 12px 12px 12px 12px;

	:hover {
		${props =>
			props.selected &&
			css`
				background-color: #004d91;
				color: #ffffff !important;
			`}
	}
	font-size: 12px;
`

const TopDiv = styled.div`
	width: 100%;
	height: 110px;
`

const MarginTop = styled.div`
	height: 15px;
`

const ContentDiv = styled.div`
	height: 624px;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 7px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: #d3d3d3;
	}
`

const Filter = styled.div`
	height: auto;
`

const BoldSpan = styled.span`
	font-size: 1.3rem;
	font-weight: 800;
`

const NormalSpan = styled.span`
	font-size: 0.9rem;
	font-weight: 300;
	color: #898989;
	line-height: 30px;
`

const StyledDivider = styled(Divider)`
	border: 0.5px solid #939dad;
	margin-top: 15px;
`

const StyledCard = styled(Card)`
	border-radius: 0px;
	height: 76px;
	margin-bottom: 10px;
`

const Video = styled.video`
	height: 76px;
	width: 100px;
	object-fit: initial;
`

const ContentTitleSpan = styled.span`
	font-size: 10px;
	font-weight: 800;
`

const ContentDescriptionSpan = styled.span`
	font-size: 10px;
	font-weight: 500;
`

const DescriptionDiv = styled.div<{ height: string }>`
	height: ${props => props.height};
`

export const VideoFilter = () => {
	const [filterCondition, setFilterCondition] = useState<FilterCondition[]>([
		{
			key: 0,
			value: '제목',
			selected: true,
		},
		{
			key: 1,
			value: '참여자',
			selected: false,
		},
		{
			key: 2,
			value: '소속',
			selected: false,
		},
		{
			key: 3,
			value: '날짜',
			selected: false,
		},
		{
			key: 4,
			value: '태그명',
			selected: false,
		},
	])

	/**
	 *
	 * @param index Filter Header Index
	 */
	const handleFilterChange = (index: number) => {
		let copyItem: FilterCondition[] = [...filterCondition]
		for (let i = 0; i < copyItem.length; i++) {
			if (i == index) {
				copyItem[i].selected = true
			} else {
				copyItem[i].selected = false
			}
		}
		setFilterCondition(copyItem)
	}

	return (
		<ParentDiv>
			<MarginTop />
			<TopDiv>
				<HeaderRow>
					<HeaderCol flex="4vw">
						<BoldSpan>필터 조건</BoldSpan>
					</HeaderCol>
					<HeaderCol flex="auto">
						<NormalSpan>현재 재생 중인 영상을 기준으로 필터됩니다.</NormalSpan>
					</HeaderCol>
				</HeaderRow>
				<MarginTop />
				<Filter>
					<FlexBox>
						{filterCondition.map((item, _) => (
							<FlexContent key={item.key}>
								<FilterButton
									selected={item.selected}
									onClick={() => handleFilterChange(item.key)}
								>
									{item.value}
								</FilterButton>
							</FlexContent>
						))}
					</FlexBox>
				</Filter>
				<StyledDivider />
			</TopDiv>
			<ContentDiv>
				{[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => (
					<StyledCard hoverable bodyStyle={{ padding: 0 }} key={index}>
						<HeaderRow>
							<ContentCol flex="100px">
								<Video>
									<source
										src="http://www.tcpschool.com/lectures/sample_video_mp4.mp4"
										type="video/mp4"
									/>
								</Video>
							</ContentCol>
							<ContentCol flex="auto" style={{ marginLeft: 10 }}>
								<DescriptionDiv height="20px">
									<ContentTitleSpan>제목을 입력해주세요.</ContentTitleSpan>
								</DescriptionDiv>
								<DescriptionDiv height="15px">
									<ContentDescriptionSpan>
										참여자: 신진섭 외 2인
									</ContentDescriptionSpan>
								</DescriptionDiv>
								<DescriptionDiv height="15px">
									<ContentDescriptionSpan>소속 : 소속</ContentDescriptionSpan>
								</DescriptionDiv>
								<DescriptionDiv height="15px">
									<ContentDescriptionSpan>
										2022-05-18 17:02:11 (30초)
									</ContentDescriptionSpan>
								</DescriptionDiv>
							</ContentCol>
						</HeaderRow>
					</StyledCard>
				))}
			</ContentDiv>
		</ParentDiv>
	)
}
