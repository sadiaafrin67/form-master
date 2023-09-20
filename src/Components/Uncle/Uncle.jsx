import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Urmi'} asset={asset}></Cousin>
                <Cousin name={'Sara'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;