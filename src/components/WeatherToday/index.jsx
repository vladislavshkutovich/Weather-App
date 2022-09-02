import React from 'react'
import {
	StyledWeatherToday,
	StyledIcon,
	StyledToday,
	StyledTemperature,
} from './styled'

export const WeatherToday = ({
	day,
	weather,
	temperature,
}) => {
	return (
		<StyledWeatherToday>
			<StyledIcon alt={weather} />
			<StyledToday>Today</StyledToday>
			<StyledTemperature>{temperature}°C</StyledTemperature>
		</StyledWeatherToday>
	)
}
