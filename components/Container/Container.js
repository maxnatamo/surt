import styles from './Container.module.scss';

export default function Container({ children, title, size = "medium" }) {
    let sizeClass = styles.medium;

    switch(size) {
        case "huge":    sizeClass = styles.huge; break;
        case "medium":  sizeClass = styles.medium; break;
        case "small":   sizeClass = styles.small; break;
    }

    return (
        <div className={styles.container}>
            <h1 className={`${styles.title} ${sizeClass}`}>{title}</h1>

            {children}
        </div>
    );
}