/* eslint-disable react/display-name */
import classNames from 'classnames';
import Image from 'next/image';
import { forwardRef, useImperativeHandle, useRef } from 'react';

import { Icon } from '../Icon';

import styles from './EntityHead.module.scss';
import { EntityHeadProps } from './EntityHead.types';

export const EntityHead = forwardRef<HTMLInputElement, EntityHeadProps>(
	(
		{
			src = null,
			imgHandler,
			subTitle = '',
			title = '',
			isChangeable = false,
			className = '',
			classNameTitle = '',
			value,
			onChange,
		},
		ref,
	) => {
		const cl = classNames(styles.container, className);
		const clTitle = classNames(styles.title, classNameTitle);
		const inputRef = useRef<HTMLInputElement>(null);

		useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

		const clickHandler = () => {
			if (inputRef.current) {
				inputRef.current.click();
			}
		};

		return (
			<div className={cl}>
				{isChangeable ? (
					<>
						<input
							accept="image/*"
							className={styles.input}
							ref={inputRef}
							type="file"
							value={value}
							onChange={onChange}
						/>
						<div className={styles.imgWrapper} onClick={clickHandler}>
							<div className={styles.addHover}>
								<Icon name="action_photo" />
							</div>
							<Image src={src ? src : '/anonym.png'} width={56} height={56} alt="" />
						</div>
					</>
				) : (
					<Image
						className="rounded-full"
						onClick={imgHandler}
						src={src ? src : '/anonym.png'}
						width={56}
						height={56}
						alt=""
					/>
				)}
				<div className={styles.textContent}>
					<h2 className={clTitle}>{title}</h2>
					<p className={styles.subTitle}>{subTitle}</p>
				</div>
			</div>
		);
	},
);
