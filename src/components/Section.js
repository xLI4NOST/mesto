export default class Section {
    constructor({items, renderItems}, containerSelector)
    {
        this._items = items
        this._renderItems = renderItems
        this._containerSelector = containerSelector
    }

    renderItems(){
    this._items.reverse().forEach ((item)=> {this._renderItems (item)}
    )
    }

    addItem(element){
        this._containerSelector.prepend(element)
    }
}