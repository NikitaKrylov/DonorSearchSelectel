




<h2>API Documentation</h2>

<h4>Account and settings</h4>

**Get all users**

```http
GET /users
```


</br>


**Create new user**
```http
POST /users
```
</br>


**Get current authorized users**
```http
POST /users/me
```
</br>


**Get user by Id**
```http
GET /users/{user_id}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `int` | **Required**. Id of a concrete user |

</br>

**Delete user by Id**
```http
DELETE /users/{user_id}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `int` | **Required**. Id of a concrete user |

</br>

**Update user data**
```http
PATCH /users/{user_id}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `int` | **Required**. Id of a concrete user |
</br>

<h4>Response datas</h4>

**GetUserDTO**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `int` | User unique identifire |
| `email` | `str` | Email |
| `address ` | `str \| None` | Home address |
| `age` | `int \| None` | Age |
| `photo` | `str \| None` | Photo link |

</br>

**CreateUserDTO**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `int` | User unique identifire |
| `email` | `str` | Email |

</br>

<h4>Pets</h4>

**Get all pets**
```http
GET /pets
</br>
```

***Create new pet***
```http
POST /pets
```
</br>


**Get pet info by Id**
```http
GET /pets/{pet_id}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `pet_id` | `int` | **Required**. Id of a concrete pet |

</br>


**Delete pet data**
```http
DELETE /pets/{pet_id}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `pet_id` | `int` | **Required**. Id of a concrete pet |

</br>


**Update pet info**
```http
PATCH /pets/{pet_id}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `pet_id` | `int` | **Required**. Id of a concrete pet |

</br>


<h4>Response datas</h4>

**GetPetDTO**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `int` | Unique pet identifire |
| `name` | `str` | Pet nickname |
| `pet_type ` | `PetType` | Kind of pet |
| `age` | `int` | Age |
| `photo` | `str` | Photo link |
| `breed` | `str` | Pet breed |
| `has_graft` | `bool` | Has the animal been vaccinated |
| `weight` | `float` | Pet weight |

</br>


<h4>Donation transactions</h4>

**Get donation transactions by type**
```http
GET /donations/{transaction_type}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `transaction_type` | `TransactionType` | **Required**. Type of a donation transaction |

</br>


**Create donation transactions**
```http
POST /donations/{transaction_type}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `transaction_type` | `TransactionType` | **Required**. Type of a donation transaction |

</br>


**Get donation transactions by Id**
```http
POST /donations/{transaction_type}/{transaction_id}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `transaction_type` | `TransactionType` | **Required**. Type of a donation transaction |

</br>


**Delete donation transactions by Id**
```http
DELETE /donations/{transaction_type}/{transaction_id}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `transaction_type` | `TransactionType` | **Required**. Type of donation transaction |
| `transaction_id` | `int` | **Required**. Id of a concrete transaction |

</br>


**Delete donation transactions by Id**
```http
PATCH /donations/{transaction_type}/{transaction_id}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `transaction_type` | `TransactionType` | **Required**. Type of donation transaction |
| `transaction_id` | `int` | **Required**. Id of a concrete transaction |

</br>


**Delete donation transactions by Id**
```http
PATCH /donations/{transaction_type}/{transaction_id}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `transaction_type` | `TransactionType` | **Required**. Type of donation transaction |
| `transaction_id` | `int` | **Required**. Id of a concrete transaction |

</br>


**Bind transactions by Id**
```http
PATCH /donations/{transaction_type}/{transaction_id}/respond/{related_transaction_id}
```
*Query parameters*
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `transaction_type` | `TransactionType` | **Required**. Type of donation transaction |
| `transaction_id` | `int` | **Required**. Id of concrete transaction |
| `related_transaction_id` | `int` | **Required**. Id of a target transaction |

</br>


<h4>Donation transactions</h4>

### GetDonationTransactionDTO

| Name | Type      | Description |
| :---- | :---- | :---- |
| `id` | `int` | Unique transaction identifire |
| `volume` | `float \| None` | Volume of required blood |
| `subject` | `GetPetDTO` | The entity referenced by the transaction |
| `type` | `TransactionType` | Type of transaction ('request' or 'suggestion') |
| `status` | `DonationTransactionStatus` | Current status of donation |
| `reason` | `str \| None` | Reason why donation is required (for 'request' only) |
| `created_at` | `datetime` | Created time |
| `related_transaction_id` | `int \| None` | Id of linked transaction |
| `related_transaction` | `GetDonationTransactionDTO \| None` | Response to request or suggestion (linked transaction) |


