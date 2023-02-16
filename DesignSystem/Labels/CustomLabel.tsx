import styled from 'styled-components'

const Label = styled.label`
	color: #1c1c1c;
	margin-left: 2px;
	letter-spacing: 0px;
	display: block;

	&:not(:first-child) {
		margin-top: 33px;
	}
`

const CustomLabel = (props: { title: string }) => {
	return <Label>{props.title}</Label>
}

export default CustomLabel
