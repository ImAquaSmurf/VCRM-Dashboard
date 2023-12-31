<script lang="ts">
  import _ from "lodash";
  import clsx from "clsx";
  import fakerData from "../utils/faker";
  import Button from "../base-components/Button";
  import Pagination from "../base-components/Pagination";
  import { FormCheck, FormInput, FormSelect } from "../base-components/Form";
  import Lucide from "../base-components/Lucide";
  import Tippy from "../base-components/Tippy";
  import { Dialog, Menu } from "../base-components/Headless";
  import Table from "../base-components/Table";

  let deleteConfirmationModal = false;
  let deleteButtonRef = null;
</script>

<div>
  <h2 class="mt-10 text-lg font-medium intro-y">Seller List</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="flex flex-wrap items-center col-span-12 mt-2 intro-y xl:flex-nowrap"
    >
      <Button variant="primary" class="mr-2 shadow-md">Add New Seller</Button>
      <Menu>
        <Menu.Button as={Button} class="px-2 !box">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Plus" class="w-4 h-4" />
          </span>
        </Menu.Button>
        <Menu.Items class="w-40">
          <Menu.Item>
            <Lucide icon="Printer" class="w-4 h-4 mr-2" /> Print
          </Menu.Item>
          <Menu.Item>
            <Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export to Excel
          </Menu.Item>
          <Menu.Item>
            <Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export to PDF
          </Menu.Item>
        </Menu.Items>
      </Menu>
      <div class="hidden mx-auto xl:block text-slate-500">
        Showing 1 to 10 of 150 entries
      </div>
      <div class="flex items-center w-full mt-3 xl:w-auto xl:mt-0">
        <div class="relative w-56 text-slate-500">
          <FormInput
            type="text"
            class="w-56 pr-10 !box"
            placeholder="Search..."
          />
          <Lucide
            icon="Search"
            class="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
          />
        </div>
        <FormSelect class="w-56 ml-2 xl:w-auto !box">
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </FormSelect>
      </div>
    </div>
    <!-- BEGIN: Data List -->
    <div class="col-span-12 overflow-auto intro-y 2xl:overflow-visible">
      <Table class="border-spacing-y-[10px] border-separate -mt-2">
        <Table.Thead>
          <Table.Tr>
            <Table.Th class="border-b-0 whitespace-nowrap">
              <FormCheck.Input type="checkbox" />
            </Table.Th>
            <Table.Th class="border-b-0 whitespace-nowrap">SELLER</Table.Th>
            <Table.Th class="text-center border-b-0 whitespace-nowrap">
              STORE
            </Table.Th>
            <Table.Th class="text-center border-b-0 whitespace-nowrap">
              GENDER
            </Table.Th>
            <Table.Th class="text-center border-b-0 whitespace-nowrap">
              STATUS
            </Table.Th>
            <Table.Th class="text-center border-b-0 whitespace-nowrap">
              TOTAL PRODUCTS
            </Table.Th>
            <Table.Th class="text-center border-b-0 whitespace-nowrap">
              ACTIONS
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {#each _.take(fakerData, 9) as faker, fakerKey}
            <Table.Tr key={fakerKey} class="intro-x">
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md w-10 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                <FormCheck.Input type="checkbox" />
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md !py-3.5 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                <div class="flex items-center">
                  <div class="w-9 h-9 image-fit zoom-in">
                    <Tippy
                      as="img"
                      alt="Midone - HTML Admin Template"
                      class="border-white rounded-lg shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                      src={faker.images[0]}
                      content={`Uploaded at ${faker.dates[0]}`}
                    />
                  </div>
                  <div class="ml-4">
                    <a href="#top" class="font-medium whitespace-nowrap">
                      {faker.users[0].name}
                    </a>
                    <div
                      class="text-slate-500 text-xs whitespace-nowrap mt-0.5"
                    >
                      {faker.users[0].email}
                    </div>
                  </div>
                </div>
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                <a
                  class="flex items-center justify-center underline decoration-dotted"
                  href="#top"
                >
                  {["Themeforest", "Codecanyon", "Graphicriver"][
                    _.random(0, 2)
                  ]}
                </a>
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md text-center capitalize bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {faker.users[0].gender}
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                <div
                  class={clsx([
                    "flex items-center justify-center",
                    { "text-success": faker.trueFalse[0] },
                    { "text-danger": !faker.trueFalse[0] },
                  ])}
                >
                  <Lucide icon="CheckSquare" class="w-4 h-4 mr-2" />
                  {faker.trueFalse[0] ? "Active" : "Inactive"}
                </div>
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
              >
                {faker.totals[0]} Items
              </Table.Td>
              <Table.Td
                class="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400"
              >
                <div class="flex items-center justify-center">
                  <a class="flex items-center mr-3" href="#top">
                    <Lucide icon="CheckSquare" class="w-4 h-4 mr-1" />
                    Edit
                  </a>
                  <a
                    class="flex items-center text-danger"
                    href="#top"
                    on:click={() => {
                      deleteConfirmationModal = true;
                    }}
                  >
                    <Lucide icon="Trash2" class="w-4 h-4 mr-1" /> Delete
                  </a>
                </div>
              </Table.Td>
            </Table.Tr>
          {/each}
        </Table.Tbody>
      </Table>
    </div>
    <!-- END: Data List -->
    <!-- BEGIN: Pagination -->
    <div
      class="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap"
    >
      <Pagination class="w-full sm:w-auto sm:mr-auto">
        <Pagination.Link>
          <Lucide icon="ChevronsLeft" class="w-4 h-4" />
        </Pagination.Link>
        <Pagination.Link>
          <Lucide icon="ChevronLeft" class="w-4 h-4" />
        </Pagination.Link>
        <Pagination.Link>...</Pagination.Link>
        <Pagination.Link>1</Pagination.Link>
        <Pagination.Link active>2</Pagination.Link>
        <Pagination.Link>3</Pagination.Link>
        <Pagination.Link>...</Pagination.Link>
        <Pagination.Link>
          <Lucide icon="ChevronRight" class="w-4 h-4" />
        </Pagination.Link>
        <Pagination.Link>
          <Lucide icon="ChevronsRight" class="w-4 h-4" />
        </Pagination.Link>
      </Pagination>
      <FormSelect class="w-20 mt-3 !box sm:mt-0">
        <option>10</option>
        <option>25</option>
        <option>35</option>
        <option>50</option>
      </FormSelect>
    </div>
    <!-- END: Pagination -->
  </div>
  <!-- BEGIN: Delete Confirmation Modal -->
  <Dialog
    open={deleteConfirmationModal}
    on:close={() => {
      deleteConfirmationModal = false;
    }}
    initialFocus={deleteButtonRef}
  >
    <Dialog.Panel>
      <div class="p-5 text-center">
        <Lucide icon="XCircle" class="w-16 h-16 mx-auto mt-3 text-danger" />
        <div class="mt-5 text-3xl">Are you sure?</div>
        <div class="mt-2 text-slate-500">
          Do you really want to delete these records? <br />
          This process cannot be undone.
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <Button
          variant="outline-secondary"
          type="button"
          on:click={() => {
            deleteConfirmationModal = false;
          }}
          class="w-24 mr-1"
        >
          Cancel
        </Button>
        <Button
          variant="danger"
          type="button"
          class="w-24"
          bind:ref={deleteButtonRef}
        >
          Delete
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
  <!-- END: Delete Confirmation Modal -->
</div>
