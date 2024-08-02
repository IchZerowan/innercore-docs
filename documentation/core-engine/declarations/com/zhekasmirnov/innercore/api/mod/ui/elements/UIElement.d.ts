declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            /* <DMHYT>: 'I am not sure about the function parameters order in this interface,
                            which I saw in previous docs. In the source code I could see (container, position),\
                            whereas here is (position, container, tile, window, canvas, scale). So TODO here is
                            to make sure if parameters order is correct' */
                            /**
                             * Object where you can specify how the UI element will behave on touch events.
                             */
                            export interface UIClickEvent {
                                /**
                                 * This function will be called when element is short touched
                                 */
                                onClick?: (position: Vector, container: container.UiAbstractContainer | apparatus.api.container.ItemContainer, tileEntity: Nullable<TileEntity> | any, window: window.IWindow, canvas: android.graphics.Canvas, scale: number) => void;
                                /**
                                 * This function will be called when element is long touched
                                 */
                                onLongClick?: (position: Vector, container: container.UiAbstractContainer | apparatus.api.container.ItemContainer, tileEntity: Nullable<TileEntity> | any, window: window.IWindow, canvas: android.graphics.Canvas, scale: number) => void;
                            }
                            /**
                             * Types that can be used to create element texture.
                             * For static textures it can be string path to texture in assets directory, or [[android.graphics.Bitmap]] instance.
                             * For animated textures it can be array of string paths to texture in assets directory, or an array of [[android.graphics.Bitmap]] instances.
                             * Each element in the array represents one of animation frames
                             */
                            export type BitmapTypes = string | string[] | android.graphics.Bitmap | android.graphics.Bitmap[];
                            /**
                             * There are 12 types of UI elements given by Inner Core, and you can also create your custom ones.
                             * Each element type has its own specific description object.
                             * These description objects are all inherited from this [[BasicElementDescription]].
                             * It means that each element must have coords on the GUI by X, Y, and additionally Z axis,
                             * and also you can specify how the element will behave when touched, in clicker object (optional).
                             */
                            export interface BasicElementDescription {
                                x?: number, y?: number, z?: number,
                                clicker?: UIClickEvent,
                                [key: string]: any
                            }
                            /**
                             * This is the base Java abstract class, which are all Inner Core element types inherited from.
                             * In Java, to create custom element types, you can inherit your element class from this one as well.
                             * Whereas in JavaScript, you should use "custom" element type in description object,
                             * where you can specify custom behavior for different events.
                             * For more information about custom element types in JavaScript,
                             * see [[UI.UICustomElement]]
                             */
                            export abstract class UIElement extends java.lang.Object {
                                static class: java.lang.Class<UIElement>;
                                cleaner: UIElementCleaner;
                                description: object;
                                descriptionWatcher: util.ScriptableWatcher;
                                elementName: string;
                                elementRect: android.graphics.Rect;
                                isDirty: boolean;
                                isTouched: boolean;
                                window: window.UIWindow;                                
                                x: number;
                                y: number;
                                z: number;
                                abstract onBindingUpdated<T>(str: string, obj: T): void;
                                abstract onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                abstract onSetup<T extends BasicElementDescription>(descr?: T): void;
                                /**
                                 * Creates a new [[UI.Texture]] instance
                                 * with specified style applied.
                                 * See [[UI.Texture.constructor]] for parameters description
                                 */
                                createTexture(obj: BitmapTypes): types.Texture;
                                /**
                                 * Sets element's position in the window's unit coordinates
                                 * @param x x position
                                 * @param y y position
                                 */
                                setPosition(x: number, y: number): void;
                                /**
                                 * Sets element's size in the window's unit coordinates
                                 * @param width element's width 
                                 * @param height element's height
                                 */
                                setSize(width: number, height: number): void;
                                constructor(window: window.UIWindow, scriptable: object);
                                getCleanerCopy(): UIElementCleaner;
                                /**
                                 * Passes any value to the element
                                 * @param bindingName binding name, you can access the value from the 
                                 * element by this name
                                 * @param value value to be passed to the element
                                 */
                                setBinding<T=any>(bindingName: string, value: T): void;
                                /**
                                 * Gets any value from the element
                                 * @param bindingName binding name, you can access the value from the 
                                 * element by this name. Some binding names are reserved for additional
                                 * element information, e.g. "element_obj" contains pointer to the
                                 * current object and "element_rect" contains [[android.graphics.Rect]] 
                                 * object containing drawing rectangle 
                                 * @returns value that was get from the element or null if the element 
                                 * doesn't exist
                                 */
                                getBinding<T=any>(name: string): UIElement | android.graphics.Rect | T;
                                setupInitialBindings(container: container.UiAbstractContainer, elementName: string): void;
                                onTouchEvent(event: types.TouchEvent): void;
                                onTouchReleased(event: types.TouchEvent): void;
                                isReleased(): boolean;
                                onRelease(): void;
                                onReset(): void;
                                invalidate(): void;
                                debug(canvas: android.graphics.Canvas, scale: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}