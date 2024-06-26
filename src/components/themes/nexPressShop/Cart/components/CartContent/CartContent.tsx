import OrderSummary from '../OrderSummary';
import ProductsList from '../ProductsList';

const CartContent = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <ProductsList />
          {/* Order summary */}
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CartContent;
