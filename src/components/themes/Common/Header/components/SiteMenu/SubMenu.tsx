import Image from '@/components/Atoms/Image';
import Link from '@/components/Atoms/Link';
import { useAppContext } from '@/utils/context/AuthProvider';
import { classNames } from '@/utils/functions/common';
import navigation from '@/utils/static/navigation';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function SiteMenu() {
  const { menus } = useAppContext();
  console.log('menus', menus);

  return (
    <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        {menus &&
          menus['PRIMARY'].map((item, index) => (
            <Popover key={index} className="flex">
              {({ open }) => (
                <>
                  {item.children && item.children.length == 0 && (
                    <div className="flex">
                      <Link className={'menu-item'} href={item.uri}>
                        {item.label}
                      </Link>
                    </div>
                  )}
                  {item.children && item.children.length > 0 && (
                    <div className="flex">
                      <Popover.Button
                        className={classNames(
                          open
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800',
                          'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
                        )}
                      >
                        {item.label}
                      </Popover.Button>
                    </div>
                  )}
                  {item.children && item.children.length > 0 && (
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          className="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {navigation.categories[0].featured.map(
                                  (item) => (
                                    <div
                                      key={item.name}
                                      className="group relative text-base sm:text-sm"
                                    >
                                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                        <Image
                                          src={item.imageSrc}
                                          alt={item.imageAlt}
                                          className="object-cover object-center"
                                        />
                                      </div>
                                      <a
                                        href={item.href}
                                        className="mt-6 block font-medium text-gray-900"
                                      >
                                        <span
                                          className="absolute inset-0 z-10"
                                          aria-hidden="true"
                                        />
                                        {item.name}
                                      </a>
                                      <p aria-hidden="true" className="mt-1">
                                        Shop now
                                      </p>
                                    </div>
                                  ),
                                )}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {navigation.categories[0].sections.map(
                                  (section) => (
                                    <div key={section.name}>
                                      <p
                                        id={`${section.name}-heading`}
                                        className="font-medium text-gray-900"
                                      >
                                        {section.name}
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby={`${section.name}-heading`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {section.items.map((item) => (
                                          <li key={item.name} className="flex">
                                            <a
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  )}
                </>
              )}
            </Popover>
          ))}
      </div>
    </Popover.Group>
  );
}
