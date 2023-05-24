import styled from 'styled-components'
import { Col, Row } from 'antd'
import { CustomButton } from '../Button/CustomButton'
import { ButtonTitle } from '../Button/ButtonTitle'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducer/rootReducer'
import { setMovieMode } from 'redux/action/movieModeSlice'

const SpanTitle = styled.span`
	font-weight: 700;
	font-size: 21px;
`

const StyledCol = styled(Col)`
	margin-left: 7px;
`

/**
 * CardDetailTitle
 * @param title: string
 * @param buttonTpye: string (video | photo)
 * @returns
 */
export const CardTitle = (params: { title: string; buttonType: string }) => {
	const dispatch = useDispatch()
	const isMovieMode = useSelector((state: RootState) => state.movieMode.status)

	const handleMovieMode = () => {
		if (!isMovieMode) {
			dispatch(setMovieMode(true))
		} else {
			dispatch(setMovieMode(false))
		}
	}

	const handleDownLoad = () => {
		console.log('다운로드')
	}

	const handleShare = () => {
		console.log('공유')
	}

	const handleModify = () => {
		console.log('수정')
	}

	const handleFavorite = () => {
		console.log('즐겨찾기')
	}

	const handleDelete = () => {
		console.log('삭제')
	}

	const cardButton = (): JSX.Element => {
		if (params.buttonType == 'video') {
			return (
				<>
					<Row>
						<StyledCol>
							<CustomButton
								type="defaultButton"
								size="small"
								title={<ButtonTitle title="영화관 모드" />}
								onClick={handleMovieMode}
							/>
						</StyledCol>
						<StyledCol>
							<CustomButton
								type="defaultButton"
								size="small"
								title={<ButtonTitle title="다운로드" />}
								onClick={handleDownLoad}
							/>
						</StyledCol>
						<StyledCol>
							<CustomButton
								type="defaultButton"
								size="small"
								title={<ButtonTitle title="공유" />}
								onClick={handleShare}
							/>
						</StyledCol>
						<StyledCol>
							<CustomButton
								type="defaultButton"
								size="small"
								title={<ButtonTitle title="수정" />}
								onClick={handleModify}
							/>
						</StyledCol>
						<StyledCol>
							<CustomButton
								type="defaultButton"
								size="small"
								title={<ButtonTitle title="즐겨찾기" />}
								onClick={handleFavorite}
							/>
						</StyledCol>
						<StyledCol>
							<CustomButton
								type="warningButton"
								size="small"
								title={<ButtonTitle title="삭제" />}
								onClick={handleDelete}
							/>
						</StyledCol>
					</Row>
				</>
			)
		} else if (params.buttonType == 'photo') {
			return (
				<Row>
					<StyledCol>
						<CustomButton
							type="defaultButton"
							size="small"
							title={<ButtonTitle title="다운로드" />}
						/>
					</StyledCol>
					<StyledCol>
						<CustomButton
							type="defaultButton"
							size="small"
							title={<ButtonTitle title="공유" />}
						/>
					</StyledCol>
					<StyledCol>
						<CustomButton
							type="defaultButton"
							size="small"
							title={<ButtonTitle title="수정" />}
						/>
					</StyledCol>
					<StyledCol>
						<CustomButton
							type="warningButton"
							size="small"
							title={<ButtonTitle title="삭제" />}
						/>
					</StyledCol>
				</Row>
			)
		} else {
			return <></>
		}
	}

	return (
		<Row>
			<Col flex={30}>
				<SpanTitle>{params.title}</SpanTitle>
			</Col>
			<Col flex={'auto'}>{cardButton()}</Col>
		</Row>
	)
}
