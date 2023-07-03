'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';

import { classname } from '@/shared/package/classname';

import { Avatar } from '../Avatar';
import { Icon } from '../Icon';

import styles from './EntityHead.module.scss';
import { EntityHeadProps } from './EntityHead.types';

export const EntityHead = forwardRef<HTMLInputElement, EntityHeadProps>(
	(
		{
			src,
			imgHandler,
			subTitle = '',
			title = '',
			isChangeable = false,
			className = '',
			classNameText,
			alt,
			value,
			onChange,
			avatarSize,
			classNameAvatar,
		},
		ref,
	) => {
		const cl = classname(styles.container, className);
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
							accept="image/jpeg, image/png"
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
							<Avatar
								size={avatarSize}
								className={`rounded-full ${classNameAvatar}`}
								onClick={imgHandler}
								src={src}
								alt={alt}
							/>
						</div>
					</>
				) : (
					<Avatar
						size={avatarSize}
						className={`rounded-full ${classNameAvatar}`}
						onClick={imgHandler}
						src={src}
						alt={alt}
					/>
				)}
				<div className={classname(styles.textContent, classNameText)}>
					<h2 className={styles.title}>{title}</h2>
					<p className={styles.subTitle}>{subTitle}</p>
				</div>
			</div>
		);
	},
);

EntityHead.displayName = 'EntityHead';
