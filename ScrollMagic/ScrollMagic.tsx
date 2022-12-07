import Magic from 'scrollmagic'
import styled from 'styled-components'
import { useEffect } from 'react'
import classes from './ScrollMagic.module.css'

const ScrollMagic = () => {
	const controller = new Magic.Controller()
	useEffect(() => {
		new Magic.Scene({
			triggerElement: `.${classes.redBox}`,
		})
			.setClassToggle(`.${classes.redBox}`, `${classes.show}`)
			.addTo(controller)
	})

	const TopBox = styled.div`
		height: 100vh;
	`

	const BottomBox = styled.div`
		height: 100vh;
	`

	return (
		<>
			<TopBox />
			<div className={classes.redBox}>Scroll Magic</div>
			<BottomBox />
		</>
	)
}

export default ScrollMagic
