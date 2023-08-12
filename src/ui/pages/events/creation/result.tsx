import React, { useState } from 'react';
import useLang from 'utils/hooks/use-lang';
import { Button, Header, Page, useNavigate, Icon, Box, Avatar, ImageViewer } from 'zmp-ui';
import { openProfilePicker } from 'zmp-sdk';
import { SiLevelsdotfyi } from 'react-icons/si';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { PiNoteBlankDuotone, PiMoney } from 'react-icons/pi';
import { TfiLocationPin } from 'react-icons/tfi';
import mapSrc from 'static/img/map.png';

interface EventResult {
	sport: 'soccer' | 'swimming' | 'badminton';
	name: string;
	level: 'Tập chơi' | 'Trung bình' | 'Chuyên nghiệp';
	startDttm: number;
	endDttm: number;
	price: number;
	note: string;
	address: string;
	members: Array<{ id: number; avatar: string }>;
	result: string | null;
}

const EventCreateResult = () => {
	const { t } = useLang();
	const navigate = useNavigate();

	const userId = window.location.pathname.slice(window.location.pathname.length - 1);

	const fetchedData: EventResult = {
		id: 1,
		sport: 'soccer',
		name: 'Đá bóng cuối tuần cùng những người anh em nhé!',
		level: 'Tập chơi',
		startDttm: Date.now(),
		endDttm: Date.now(),
		price: 15000,
		note: 'Cần chuẩn bị giày dép, áo trắng đầy đủ.',
		address: 'Sân bóng Trần Bình Trong, Phường 2, Quận 8, Hồ Chí Minh',
		members: [
			{
				id: 1,
				avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgSnMl1uAoj2UyPsJKRpWTHkJ6dHQU91yyw&usqp=CAU',
			},
			{
				id: 2,
				avatar: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0JTIwc21pbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
			},
			{
				id: 3,
				avatar: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0JTIwc21pbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
			},
		],
		result: '1_2',
	};

	const { id, sport, name, level, startDttm, endDttm, price, note, address, members, result } =
		fetchedData;

	const handleInvite = () => {
		openProfilePicker({ maxProfile: 10 });
	};

	const bgImage = (() => {
		switch (sport) {
			case 'soccer':
				return 'https://cdn.resfu.com/media/img_news/imagen-de-un-balon-de-un-futbol-durante-un-partido--unsplash.jpg?size=1000x&lossy=1';
			case 'swimming':
				return 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
			case 'badminton':
				return 'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFkbWludG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
			default:
				return '#';
		}
	})();

	const startDateString =
		'ngày ' +
		new Date(startDttm).toLocaleString(undefined, {
			day: 'numeric',
			month: 'numeric',
			year: 'numeric',
		});

	const startTimeString = new Date(startDttm).toLocaleString(undefined, {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: false,
	});
	const endTimeString = new Date(endDttm).toLocaleString(undefined, {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: false,
	});
	const timeString = `${startTimeString}:${endTimeString}`;

	const imgGallery = [
		{
			src: 'https://stc-zmp.zadn.vn/zmp-zaui/images/e2e10aa1a6087a5623192.jpg',
			alt: 'img 1',
			key: '1',
		},
		{
			src: 'https://stc-zmp.zadn.vn/zmp-zaui/images/fee40cbea0177c4925061.jpg',
			alt: 'img 2',
			key: '2',
		},
		{
			src: 'https://stc-zmp.zadn.vn/zmp-zaui/images/82ca759bd932056c5c233.jpg',
			alt: 'img 3',
			key: '3',
		},
		{
			src: 'https://stc-zmp.zadn.vn/zmp-zaui/images/77f5b8cd1464c83a91754.jpg',
			alt: 'img 4',
			key: '4',
		},
	];

	const [visible, setVisible] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<Page className="zpage-container bg-white">
			<Header className="zpage-header" title={t('STR_EVENT_DETAIL')} />
			<div
				className={`w-full h-[182px] flex flex-col justify-end pl-[26px] pr-[6px] pb-[12px] bg-cover`}
				style={{
					backgroundImage: `url(${bgImage})`,
				}}>
				<p className="mb-[10px] font-bold text-white text-[24px]">{name}</p>
				<Box flex className="gap-[16px]">
					<Button
						fullWidth={false}
						prefixIcon={<Icon icon="zi-add-user" />}
						size="small"
						onClick={handleInvite}>
						{t('STR_JOIN_BTN')}
					</Button>
					<Button
						fullWidth={false}
						prefixIcon={<Icon icon="zi-chat" />}
						size="small"
						onClick={() => navigate('/my-events/chat')}>
						Thảo luận
					</Button>
				</Box>
			</div>
			<Box className="w-full h-full flex flex-col !pt-[24px] !px-[21px]">
				<table>
					<tbody>
						<tr>
							<td>
								<SiLevelsdotfyi size={20} />
							</td>
							<td>
								<div className="p-[7px] rounded-md bg-[#EBF4FF] font-[#006AF5] font-[500] w-fit">
									{level}
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<AiOutlineCalendar size={20} />
							</td>
							<td>
								<span className="font-normal text-[16px]">{startDateString}</span>
							</td>
						</tr>
						<tr>
							<td>
								<AiOutlineClockCircle size={20} />
							</td>
							<td>
								<span className="font-normal text-[16px]">{timeString}</span>
							</td>
						</tr>
						<tr>
							<td>
								<PiMoney size={20} />
							</td>
							<td>
								<span className="font-normal text-[16px]">{price}</span>
							</td>
						</tr>
						<tr>
							<td>
								<PiNoteBlankDuotone size={20} />
							</td>
							<td>
								<span className="font-normal text-[16px]">{note}</span>
							</td>
						</tr>
						<tr>
							<td>
								<TfiLocationPin size={20} />
							</td>
							<td>
								<span className="font-normal text-[16px]">{address}</span>
							</td>
						</tr>
					</tbody>
				</table>
				<img src={mapSrc} className="wy-[16px]" />

				<div className="flex flex-col mt-[26px]">
					<div className="mb-[13px] flex justify-between">
						<span className="font-medium">Thành viên tham gia</span>
						<a
							className="no-underline font-medium text-[#3056C6]"
							onClick={() => navigate('/my-events/members' + '/' + id)}>
							Xem thêm
						</a>
					</div>
					<Avatar.Group
						horizontal
						onCounterClick={() => navigate('/my-events/members' + '/' + id)}>
						{members.map(({ id, avatar }) => (
							<Avatar key={id} src={avatar} />
						))}
					</Avatar.Group>
				</div>
				<div className="flex flex-col mt-[26px]">
					<span className="font-medium">Hình ảnh</span>
					<Box mt={2}>
						<Box flex flexDirection="row" flexWrap={false}>
							{imgGallery.map((img, index) => (
								<Box
									mr={1}
									key={img.key}
									style={{
										width: '68px',
										height: '69px',
										borderRadius: '8px',
										overflow: 'hidden',
									}}>
									<img
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
										}}
										role="presentation"
										onClick={() => {
											setActiveIndex(index);
											setVisible(true);
										}}
										src={img.src}
										alt={img.alt}
									/>
								</Box>
							))}
						</Box>
						<ImageViewer
							onClose={() => setVisible(false)}
							activeIndex={activeIndex}
							images={imgGallery}
							visible={visible}
						/>
					</Box>
				</div>
				<div className="flex flex-col mt-[26px]">
					<div>
						<span className="font-medium">Kết quả trận đấu:</span>
						{result === null && (
							<Button size="small" icon={<Icon icon="zi-plus" />}>
								Button
							</Button>
						)}
					</div>
					{result === null ? (
						<span className="italic">Chưa có.</span>
					) : (
						<ul>
							<li className="italic">
								Đội 1: <b>{result.split('_')[0]}</b>
							</li>
							<li className="italic">
								Đội 2: <b>{result.split('_')[1]}</b>
							</li>
						</ul>
					)}
				</div>
			</Box>
		</Page>
	);
};

export default EventCreateResult;
