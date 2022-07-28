import styles from "./SearchBar.module.css";

type Props = {
    inStockOnly: boolean;
    filterText: string;
};

export default function SearchBar(props: Props) {
    

    return (
        <form className={styles.form}>
            {/* Componente controlado */}
            <input 
                type="text" 
                placeholder="Search..." 
                onChange={e => setFilterText(e.target.value)} 
                value={filterText} 
            />
            <label>
                <input 
                    type="checkbox" 
                    onChange={() => setInStockOnly(!inStockOnly)} 
                    checked={inStockOnly} /> Only show products in stock
            </label>
        </form>
    );
}