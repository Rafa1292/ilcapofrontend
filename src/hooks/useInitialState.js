import { useState, useEffect } from "react";
import { useGet } from '../hooks/useAPI';
import swal from 'sweetalert';

const initialState = {
	products: [],
	cartIsOpen: false,
	auth: {
		role: 'customer',
		sub: 0,
		user: null,
		justSee: false
	}
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const resetAuthState = () => {
		setState(initialState);
	}

	const toggleCart = (payload) => {
		setState(
			{
				...state,
				cartIsOpen: payload
			}
		)
	}

	const getProductList = () => {
		let tempProducts = [
			getProduct(1, 'Alas', 650, 0, 'Alas de pollo frito', '',[]),
			getProduct(2, 'Buffalo', 500, 0, 'Salsa para alitas', '',[]),
			getProduct(3, 'Bbq', 500, 0, 'Salsa para alitas', '',[]),
			getProduct(4, 'Mostaza miel', 500, 0, 'Salsa para alitas', '',[]),
			getProduct(5, 'Grande', 1000, 0, 'Masa para pizza', '',[]),
			getProduct(6, 'Mediana', 800, 0, 'Masa para pizza', '',[]),
			getProduct(7, 'Personal', 600, 0, 'Masa para pizza', '',[]),
		];

		tempProducts = [
			...tempProducts,
			getProduct(8, 'Jamon y queso', 0, 1, 'Deliciosa pizza con jamon y queso', '',[
				{
					id: 1,
					name: 'Tamaños de pizza',
					minOption: 1,
					maxOption: 1,
					isRequired: true,
					label: 'Seleccione su tamaño',
					modifierItems: [
						{
							id: 1, 
							name: 'Grande', 
							modifierId: 1, 
							productId: 5, 
							quantity: 0, 
							price: 8000,
							product: tempProducts.find(x => x.id == 5)
						},
						{
							id: 2, 
							name: 'Mediana', 
							modifierId: 1, 
							productId: 6, 
							quantity: 0, 
							price: 7000,
							product: tempProducts.find(x => x.id == 6)
						},
						{
							id: 3, 
							name: 'Personal', 
							modifierId: 1, 
							productId: 7, 
							quantity: 0, 
							price: 6000,
							product: tempProducts.find(x => x.id == 7)
						}
					]
				}
			]),
			getProduct(9, 'Margarita', 0, 1, 'Deliciosa pizza con Tomate fresco', '',[
				{
					id: 1,
					name: 'Tamaños de pizza',
					minOption: 1,
					maxOption: 1,
					isRequired: true,
					label: 'Seleccione su tamaño',
					modifierItems: [
						{
							id: 1, 
							name: 'Grande', 
							modifierId: 1, 
							productId: 5, 
							quantity: 0, 
							price: 8000,
							product: tempProducts.find(x => x.id == 5)
						},
						{
							id: 2, 
							name: 'Mediana', 
							modifierId: 1, 
							productId: 6, 
							quantity: 0, 
							price: 7000,
							product: tempProducts.find(x => x.id == 6)
						},
						{
							id: 3, 
							name: 'Personal', 
							modifierId: 1, 
							productId: 7, 
							quantity: 0, 
							price: 6000,
							product: tempProducts.find(x => x.id == 7)
						}
					]
				}
			]),
			getProduct(10, 'Suprema', 0, 1, 'Deliciosa pizza con todo', '',[
				{
					id: 1,
					name: 'Tamaños de pizza',
					minOption: 1,
					maxOption: 1,
					isRequired: true,
					label: 'Seleccione su tamaño',
					modifierItems: [
						{
							id: 1, 
							name: 'Grande', 
							modifierId: 1, 
							productId: 5, 
							quantity: 0, 
							price: 9000,
							product: tempProducts.find(x => x.id == 5)
						},
						{
							id: 2, 
							name: 'Mediana', 
							modifierId: 1, 
							productId: 6, 
							quantity: 0, 
							price: 8000,
							product: tempProducts.find(x => x.id == 6)
						},
						{
							id: 3, 
							name: 'Personal', 
							modifierId: 1, 
							productId: 7, 
							quantity: 0, 
							price: 7000,
							product: tempProducts.find(x => x.id == 7)
						}
					]
				}
			]),
			getProduct(11, 'Il capo', 0, 1, 'Deliciosa pizza con prosciutto', '',[
				{
					id: 1,
					name: 'Tamaños de pizza',
					minOption: 1,
					maxOption: 1,
					isRequired: true,
					label: 'Seleccione su tamaño',
					modifierItems: [
						{
							id: 1, 
							name: 'Grande', 
							modifierId: 1, 
							productId: 5, 
							quantity: 0, 
							price: 9000,
							product: tempProducts.find(x => x.id == 5)
						},
						{
							id: 2, 
							name: 'Mediana', 
							modifierId: 1, 
							productId: 6, 
							quantity: 0, 
							price: 8000,
							product: tempProducts.find(x => x.id == 6)
						},
						{
							id: 3, 
							name: 'Personal', 
							modifierId: 1, 
							productId: 7, 
							quantity: 0, 
							price: 7000,
							product: tempProducts.find(x => x.id == 7)
						}
					]
				}
			]),
			getProduct(12, '6 alitas', 4800, 2, 'Alitas de pollo en tu salsa favorita', '',[
				{
					id: 2,
					name: 'Salsas para alitas',
					minOption: 1,
					maxOption: 1,
					isRequired: true,
					label: 'Seleccione sus salsas',
					modifierItems: [
						{
							id: 4, 
							name: 'Bbq', 
							modifierId: 2, 
							productId: 3, 
							quantity: 0, 
							price: 0,
							product: tempProducts.find(x => x.id == 3)
						},
						{
							id: 5, 
							name: 'Bufalo', 
							modifierId: 2, 
							productId: 2, 
							quantity: 0, 
							price: 0,
							product: tempProducts.find(x => x.id == 2)
						},
						{
							id: 6, 
							name: 'Mostaza', 
							modifierId: 2, 
							productId: 4, 
							quantity: 0, 
							price: 0,
							product: tempProducts.find(x => x.id == 4)
						}
					]
				}
			]),
			getProduct(13, '8 alitas', 6800, 2, 'Alitas de pollo en tu salsa favorita', '',[
				{
					id: 3,
					name: 'Salsas para alitas',
					minOption: 1,
					maxOption: 2,
					isRequired: true,
					label: 'Seleccione sus salsas',
					modifierItems: [
						{
							id: 4, 
							name: 'Bbq', 
							modifierId: 2, 
							productId: 3, 
							quantity: 0, 
							price: 0,
							product: tempProducts.find(x => x.id == 3)
						},
						{
							id: 5, 
							name: 'Bufalo', 
							modifierId: 2, 
							productId: 2, 
							quantity: 0, 
							price: 0,
							product: tempProducts.find(x => x.id == 2)
						},
						{
							id: 6, 
							name: 'Mostaza', 
							modifierId: 2, 
							productId: 4, 
							quantity: 0, 
							price: 0,
							product: tempProducts.find(x => x.id == 4)
						}
					]
				}
			]),
			getProduct(14, '12 alitas', 7800, 2, 'Alitas de pollo en tu salsa favorita', '',[
				{
					id: 4,
					name: 'Salsas para alitas',
					minOption: 1,
					maxOption: 3,
					isRequired: true,
					label: 'Seleccione sus salsas',
					modifierItems: [
						{
							id: 4, 
							name: 'Bbq', 
							modifierId: 2, 
							productId: 3, 
							quantity: 0, 
							price: 0,
							product: tempProducts.find(x => x.id == 3)
						},
						{
							id: 5, 
							name: 'Bufalo', 
							modifierId: 2, 
							productId: 2, 
							quantity: 0, 
							price: 0,
							product: tempProducts.find(x => x.id == 2)
						},
						{
							id: 6, 
							name: 'Mostaza', 
							modifierId: 2, 
							productId: 4, 
							quantity: 0, 
							price: 0,
							product: tempProducts.find(x => x.id == 4)
						}
					]
				}
			]),
		]

		tempProducts = [
			...tempProducts,
			getProduct(14, 'Alitas de pollo', 0, 2, 'Alitas de pollo en tu salsa favorita', '',[
				{
					id: 4,
					name: 'Cantidad de alitas',
					minOption: 1,
					maxOption: 3,
					isRequired: true,
					label: 'Seleccione la cantidad',
					modifierItems: [
						{
							id: 7, 
							name: '6 alitas', 
							modifierId: 2, 
							productId: 12, 
							quantity: 0, 
							price: 0,
							product: tempProducts.find(x => x.id == 12)
						},
						{
							id: 5, 
							name: '8 alitas', 
							modifierId: 2, 
							productId: 13, 
							quantity: 0, 
							price: 0,
							product: tempProducts.find(x => x.id == 13)
						},
						{
							id: 6, 
							name: '12 alitas', 
							modifierId: 2, 
							productId: 14, 
							quantity: 0, 
							price: 0,
							product: tempProducts.find(x => x.id == 14)
						}
					]
				}
			]),
		]
		console.log(tempProducts)
		setState({
			...state,
			products : tempProducts
		}
		)
	}

	const getProduct = (id, name, price, categoryId, description, picture, modifiers) => {
		return {
			id: id,
			name: name,
			price: price,
			productCategoryId: categoryId,
			description: description,
			picture: picture,
			modifiers: modifiers.length > 0 ? getModifiers(modifiers) : []
		}
	}

	const getModifiers = (modifiers) => {
		return modifiers.map(x => 
				getModifier(x.id, x.name, x.minOption, x.maxOption, x.isRequired, x.label, x.modifierItems ? x.modifierItems : [])
				)
			

	}

	const getModifier = (id, name, minOption, maxOption, isRequired, label, modifierItems) => {
		return {
			id: id,
			name: name,
			minOption: minOption,
			maxOption: maxOption,
			isRequired: isRequired,
			label: label,
			modifierItems: modifierItems.length > 0 ?
				modifierItems.map(x =>
					getItemModifier(x.id, x.name, x.modifierId, x.productId, x.quantity, x.price, x.product)
				)
				:
				[]
		}
	}

	const getItemModifier = (id, name, modifierId, productId, quantity, price, product) => {
		return {
			id: id,
			name: name,
			modifierId: modifierId,
			productId: productId,
			quantity: quantity,
			price: price,
			product: product
		}
	}

	
	useEffect(async () => {
		getProductList();
	}, []);



	return {
		resetAuthState,
		state,
		toggleCart
	}
}

export default useInitialState;
