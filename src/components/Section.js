export default class Section {
    constructor({items, renderItems}, containerSelector)
    {
        this._items = items
        this._renderItems = renderItems
        this._containerSelector = containerSelector
    }

    renderItems(){
    this._items.forEach ((item)=> {this._renderItems (item)}
    )
    }

    addItem(element){
        this._containerSelector.append(element)
    }
}