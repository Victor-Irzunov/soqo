import React, { useContext } from 'react'
import { Button, Badge } from 'antd'
import {

	UserOutlined,
	ReadOutlined,
	ExportOutlined,
	EyeOutlined,
} from '@ant-design/icons'
import { Context } from '../App'
import { Link } from 'react-router-dom'
import { observer } from "mobx-react-lite"
// import { useScreens } from '../../../../Constants/constants'
import heart from '../images/menuIcon/heart6.svg'
import vesy from '../images/menuIcon/scale2.svg'




export const titles = {
	'/': {
		title: 'Крупный онлайн-магазин сантехники в Минске',
		description: 'Первый поставщик качественной недорогой сантехники SOQO в Беларуси.'
	},
}

export const textMenPage = {
	h1: 'Сантехника SOQO',
	h2: 'Где купить сантехнику SOQO?',
	h3: 'Преимущества покупки сантехнического оборудования на этом сайте',
	p: 'Сантехника SOQO – это уникальный подарок, который вы можете сделать для Вашего дома, который внесет комфорт, ценящийся превыше всего, и простота в использовании продиктованные нашей стремительной жизнью, где требуется сочетание современных технологий, высокого качества и разумной цены.',

	p2: `Наш сайт soqo.by – это электронный каталог сантехнического оборудования, размещенного по адресу г. Минск, улица Кульман 5Б, павильон 195, в котором вы можете как предварительно просмотреть весь ассортимент кранов, душевых систем, так и осуществить заказ понравившегося вам товара. Для того, чтобы выбрать хороший смеситель среди большого разнообразия представленных в сети интернет, а также на рынке Республики Беларусь необходимо определиться что для Вас главное. Как и во многих других сферах, перед покупателем стоит дилемма: взять европейский бренд по головокружительной стоимости или недорогую сантехнику фирмы SOQO с отличным качеством. Компания SOQO является лидером по производству сантехники в Китае. В начале вы обращаете внимание на дизайн, так как большинство из нас сразу же представляют картинку того, как эта модель будет смотреться в вашем интерьере, а уж после этого мы вспоминаем про характеристики смесителя, принцип его работы и удобство в использовании. Обращаясь в наш магазин, Вы выбирайте надежную, качественную модель по адекватной стоимости, которая прослужит вам долго и принесет уйму положительных эмоций. Вы всегда можете посоветоваться с нашим специалистом, и он подскажет оптимальный вариант для Вас, чтобы выбор был сделан в пользу качества и эстетически, так что бы вы могли выделиться перед другими оригинальностью дизайна. Конечно же продавец в дорогом бутике вам будет навязывать какой-нибудь раскрученный бренд, но ведь он все-же не профессионал и отчасти у него есть и свои интересы. В свою очередь возникает вопрос, зачем переплачивать за бренд, если можно приобрести такую же качественную и недорогую сантехнику, от эстетического вида которой вы будете испытывать чувство удовлетворенности за правильно принятое решение.`,


	p3: (
		<div>
			<p>
				Если вы предпочитаете покупать товары и услуги онлайн, а не ходить в офлайн-магазины и торговые центры, вы не одиноки: по данным Яндекс Аналитики, объем покупок в интернете вырос в 1,9 раза по сравнению с прошлым годом. Сантехника, аксессуары и бытовая техника одни из самых востребованных и потребительских товаров, которые широко покупают и ищут в сети Интернете. Узнайте о сантехнических товарах, предлагаемых в интернет-магазине, и изучите каталог интернет-магазина сантехники soqo.by, чтобы понять, стоит ли покупать в сети интернет и как можно быстро сделать заказ. Преимущества покупки сантехники в интернет-магазине Вы можете просмотреть товары, выбрать понравившиеся и добавить их в корзину.
			</p>

			<ul>
				<li>
					Оплатаонлайн или наличными курьере
				</li>
				<li>
					Вы можете совершить покупку в удобное время
				</li>
				<li>
					Никаких очередей
				</li>
				<li>
					Никаких продавцов, ходящих за вами по пятам и раздражая вас, а если у вас есть вопросы, вы можете задать их прямо на сайте
				</li>
				<li>
					Информация о популярных товарах, новых моделях и скидках всегда доступна на главной странице нашего интернет-магазина
				</li>
				<li>
					Используя поисковые системы, вы легко найдете все товары в нашем интернет-магазине
				</li>
			</ul>

			<p>
			Главная задача интернет-магазина появиться первой странице поисковой системы. А чтобы покупатели не уходили сразу, необходим удобный интерфейс и простая в использовании поисковая система. Если на главной странице отображается список товаров и услуг, покупателю легче выбрать ту часть каталога, где находится нужный товар.
			</p>

			<p>
			На главной странице интернет-магазина сантехники soqo.by представлены основные и дополнительные товары, с четким пространством для поиска товаров со скидками, предложений, новинок и бестселлеров. Смесители для использования на кухне и в ванной комнате также легко найти в каталоге.
			</p>
		</div>
	)
}

export const Content = observer(() => {
	const { user, dataApp } = useContext(Context)
	const exit = () => {
		localStorage.removeItem('token')
		user.setIsAuth(false)
		user.setUser(false)
	}
	return (
		<div className='h-auto w-52'>
			<div className='text-center mb-3'>
				<p className='text-lg font-semibold'>Аккаунт</p>
				<p className='text-gray-500'>{user.userData.login ? user.userData.login : ''}</p>
			</div>
			<p className='text-base py-1'>
				<UserOutlined />
				<Link to='/moi-dannye' className='ml-1.5'>Мои данные</Link>
			</p>
			<p className='text-base py-1'>
				<ReadOutlined />
				<Link to='/istoriya-zakazov' className='ml-1.5'>История заказов</Link>
			</p>
			<div className='flex justify-start items-center'>
				<img
					src={vesy}
					className='w-4 hover:scale-110 duration-500 mr-1.5'
					alt='список избранных'
				/>
				<p className='text-base py-1 mr-2'>
					<Link to='/cpisok-sravneniya'>Список сравнения</Link>
				</p>
				<Badge count={dataApp.vesyLength} showZero color='#292D51' />
			</div>
			<div className='flex justify-start items-center'>
				<img
					src={heart}
					className='w-4 hover:scale-110 duration-500 mr-1.5'
					alt='список избранных'
				/>
				<p className='text-base py-1 mr-2'>
					<Link to='/spisok-ponravivshikhsya'>Избранные</Link>
				</p>
				<Badge count={dataApp.likedLength} showZero color='#292D51' />
			</div>
			<div className='flex justify-start items-center'>
				<EyeOutlined />
				<p className='text-base py-1 mr-2 ml-1.5'>
					<Link to='/prosmotrennye-tovari'>Просмотренные</Link>
				</p>
				<Badge count={dataApp.viewLength} showZero color='#292D51' />
			</div>
			<hr />
			<div className='flex items-center'>
				<ExportOutlined />
				<p className='ml-1.5'>
					<Button
						type='text'
						className='p-0 text-base'
						onClick={exit}
					>Выход</Button>
				</p>
			</div>
		</div>
	)
})